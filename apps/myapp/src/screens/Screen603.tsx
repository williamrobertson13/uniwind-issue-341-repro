import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy603 } from '../generated/copy/copy603';
import { layout603 } from '../generated/layouts/layout603';
import { palette603 } from '../generated/palettes/palette603';

const RuntimeView603 = withUniwind(View);

export function Screen603() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView603 styleClassName={layout603.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy603.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy603.detail} / {palette603.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
