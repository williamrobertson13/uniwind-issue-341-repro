import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1326 } from '../generated/copy/copy1326';
import { layout1326 } from '../generated/layouts/layout1326';
import { palette1326 } from '../generated/palettes/palette1326';

const RuntimeView1326 = withUniwind(View);

export function Screen1326() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView1326 styleClassName={layout1326.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy1326.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1326.detail} / {palette1326.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
