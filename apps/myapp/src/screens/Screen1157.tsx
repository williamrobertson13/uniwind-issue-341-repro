import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1157 } from '../generated/copy/copy1157';
import { layout1157 } from '../generated/layouts/layout1157';
import { palette1157 } from '../generated/palettes/palette1157';

const RuntimeView1157 = withUniwind(View);

export function Screen1157() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView1157 styleClassName={layout1157.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy1157.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1157.detail} / {palette1157.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
