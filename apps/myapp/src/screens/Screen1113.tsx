import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1113 } from '../generated/copy/copy1113';
import { layout1113 } from '../generated/layouts/layout1113';
import { palette1113 } from '../generated/palettes/palette1113';

const RuntimeView1113 = withUniwind(View);

export function Screen1113() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView1113 styleClassName={layout1113.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy1113.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1113.detail} / {palette1113.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
