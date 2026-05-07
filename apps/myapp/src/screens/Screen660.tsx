import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy660 } from '../generated/copy/copy660';
import { layout660 } from '../generated/layouts/layout660';
import { palette660 } from '../generated/palettes/palette660';

const RuntimeView660 = withUniwind(View);

export function Screen660() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<RuntimeView660 styleClassName={layout660.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy660.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy660.detail} / {palette660.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
