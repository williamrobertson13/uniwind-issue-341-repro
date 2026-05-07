import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1212 } from '../generated/copy/copy1212';
import { layout1212 } from '../generated/layouts/layout1212';
import { palette1212 } from '../generated/palettes/palette1212';

const RuntimeView1212 = withUniwind(View);

export function Screen1212() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<RuntimeView1212 styleClassName={layout1212.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy1212.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1212.detail} / {palette1212.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
