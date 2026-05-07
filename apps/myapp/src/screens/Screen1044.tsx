import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1044 } from '../generated/copy/copy1044';
import { layout1044 } from '../generated/layouts/layout1044';
import { palette1044 } from '../generated/palettes/palette1044';

const RuntimeView1044 = withUniwind(View);

export function Screen1044() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<RuntimeView1044 styleClassName={layout1044.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy1044.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1044.detail} / {palette1044.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
