import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1365 } from '../generated/copy/copy1365';
import { layout1365 } from '../generated/layouts/layout1365';
import { palette1365 } from '../generated/palettes/palette1365';

const RuntimeView1365 = withUniwind(View);

export function Screen1365() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView1365 styleClassName={layout1365.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy1365.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1365.detail} / {palette1365.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
