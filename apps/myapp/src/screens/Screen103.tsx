import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy103 } from '../generated/copy/copy103';
import { layout103 } from '../generated/layouts/layout103';
import { palette103 } from '../generated/palettes/palette103';

const RuntimeView103 = withUniwind(View);

export function Screen103() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView103 styleClassName={layout103.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy103.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy103.detail} / {palette103.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
