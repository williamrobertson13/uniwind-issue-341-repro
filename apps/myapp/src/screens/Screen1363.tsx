import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1363 } from '../generated/copy/copy1363';
import { layout1363 } from '../generated/layouts/layout1363';
import { palette1363 } from '../generated/palettes/palette1363';

const RuntimeView1363 = withUniwind(View);

export function Screen1363() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView1363 styleClassName={layout1363.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy1363.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1363.detail} / {palette1363.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
