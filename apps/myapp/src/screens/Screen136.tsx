import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy136 } from '../generated/copy/copy136';
import { layout136 } from '../generated/layouts/layout136';
import { palette136 } from '../generated/palettes/palette136';

const RuntimeView136 = withUniwind(View);

export function Screen136() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<RuntimeView136 styleClassName={layout136.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy136.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy136.detail} / {palette136.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
