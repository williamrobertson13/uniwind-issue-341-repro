import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1118 } from '../generated/copy/copy1118';
import { layout1118 } from '../generated/layouts/layout1118';
import { palette1118 } from '../generated/palettes/palette1118';

const RuntimeView1118 = withUniwind(View);

export function Screen1118() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView1118 styleClassName={layout1118.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy1118.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1118.detail} / {palette1118.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
