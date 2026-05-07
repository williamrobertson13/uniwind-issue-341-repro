import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy646 } from '../generated/copy/copy646';
import { layout646 } from '../generated/layouts/layout646';
import { palette646 } from '../generated/palettes/palette646';

const RuntimeView646 = withUniwind(View);

export function Screen646() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView646 styleClassName={layout646.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy646.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy646.detail} / {palette646.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
