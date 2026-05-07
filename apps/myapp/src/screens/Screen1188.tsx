import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1188 } from '../generated/copy/copy1188';
import { layout1188 } from '../generated/layouts/layout1188';
import { palette1188 } from '../generated/palettes/palette1188';

const RuntimeView1188 = withUniwind(View);

export function Screen1188() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<RuntimeView1188 styleClassName={layout1188.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy1188.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1188.detail} / {palette1188.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
