import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy825 } from '../generated/copy/copy825';
import { layout825 } from '../generated/layouts/layout825';
import { palette825 } from '../generated/palettes/palette825';

const RuntimeView825 = withUniwind(View);

export function Screen825() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView825 styleClassName={layout825.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy825.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy825.detail} / {palette825.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
