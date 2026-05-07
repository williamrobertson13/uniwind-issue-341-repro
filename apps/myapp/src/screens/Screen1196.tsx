import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1196 } from '../generated/copy/copy1196';
import { layout1196 } from '../generated/layouts/layout1196';
import { palette1196 } from '../generated/palettes/palette1196';

const RuntimeView1196 = withUniwind(View);

export function Screen1196() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<RuntimeView1196 styleClassName={layout1196.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy1196.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1196.detail} / {palette1196.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
