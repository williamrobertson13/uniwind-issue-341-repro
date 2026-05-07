import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy577 } from '../generated/copy/copy577';
import { layout577 } from '../generated/layouts/layout577';
import { palette577 } from '../generated/palettes/palette577';

const RuntimeView577 = withUniwind(View);

export function Screen577() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView577 styleClassName={layout577.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy577.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy577.detail} / {palette577.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
