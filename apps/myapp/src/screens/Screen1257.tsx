import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1257 } from '../generated/copy/copy1257';
import { layout1257 } from '../generated/layouts/layout1257';
import { palette1257 } from '../generated/palettes/palette1257';

const RuntimeView1257 = withUniwind(View);

export function Screen1257() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView1257 styleClassName={layout1257.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy1257.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1257.detail} / {palette1257.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
