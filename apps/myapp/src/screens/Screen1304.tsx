import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1304 } from '../generated/copy/copy1304';
import { layout1304 } from '../generated/layouts/layout1304';
import { palette1304 } from '../generated/palettes/palette1304';

const RuntimeView1304 = withUniwind(View);

export function Screen1304() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<RuntimeView1304 styleClassName={layout1304.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy1304.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1304.detail} / {palette1304.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
