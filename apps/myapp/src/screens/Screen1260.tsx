import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1260 } from '../generated/copy/copy1260';
import { layout1260 } from '../generated/layouts/layout1260';
import { palette1260 } from '../generated/palettes/palette1260';

const RuntimeView1260 = withUniwind(View);

export function Screen1260() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<RuntimeView1260 styleClassName={layout1260.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy1260.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1260.detail} / {palette1260.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
