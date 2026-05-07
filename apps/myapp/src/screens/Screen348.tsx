import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy348 } from '../generated/copy/copy348';
import { layout348 } from '../generated/layouts/layout348';
import { palette348 } from '../generated/palettes/palette348';

const RuntimeView348 = withUniwind(View);

export function Screen348() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<RuntimeView348 styleClassName={layout348.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy348.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy348.detail} / {palette348.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
