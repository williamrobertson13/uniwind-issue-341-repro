import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy101 } from '../generated/copy/copy101';
import { layout101 } from '../generated/layouts/layout101';
import { palette101 } from '../generated/palettes/palette101';

const RuntimeView101 = withUniwind(View);

export function Screen101() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView101 styleClassName={layout101.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy101.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy101.detail} / {palette101.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
