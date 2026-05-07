import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy598 } from '../generated/copy/copy598';
import { layout598 } from '../generated/layouts/layout598';
import { palette598 } from '../generated/palettes/palette598';

const RuntimeView598 = withUniwind(View);

export function Screen598() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView598 styleClassName={layout598.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy598.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy598.detail} / {palette598.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
