import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1158 } from '../generated/copy/copy1158';
import { layout1158 } from '../generated/layouts/layout1158';
import { palette1158 } from '../generated/palettes/palette1158';

const RuntimeView1158 = withUniwind(View);

export function Screen1158() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView1158 styleClassName={layout1158.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy1158.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1158.detail} / {palette1158.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
