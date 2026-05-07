import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy892 } from '../generated/copy/copy892';
import { layout892 } from '../generated/layouts/layout892';
import { palette892 } from '../generated/palettes/palette892';

const RuntimeView892 = withUniwind(View);

export function Screen892() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<RuntimeView892 styleClassName={layout892.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy892.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy892.detail} / {palette892.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
