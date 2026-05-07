import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy614 } from '../generated/copy/copy614';
import { layout614 } from '../generated/layouts/layout614';
import { palette614 } from '../generated/palettes/palette614';

const RuntimeView614 = withUniwind(View);

export function Screen614() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView614 styleClassName={layout614.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy614.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy614.detail} / {palette614.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
