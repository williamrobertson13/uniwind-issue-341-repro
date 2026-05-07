import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1340 } from '../generated/copy/copy1340';
import { layout1340 } from '../generated/layouts/layout1340';
import { palette1340 } from '../generated/palettes/palette1340';

const RuntimeView1340 = withUniwind(View);

export function Screen1340() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<RuntimeView1340 styleClassName={layout1340.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy1340.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1340.detail} / {palette1340.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
