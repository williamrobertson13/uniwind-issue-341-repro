import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1083 } from '../generated/copy/copy1083';
import { layout1083 } from '../generated/layouts/layout1083';
import { palette1083 } from '../generated/palettes/palette1083';

const RuntimeView1083 = withUniwind(View);

export function Screen1083() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView1083 styleClassName={layout1083.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy1083.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1083.detail} / {palette1083.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
