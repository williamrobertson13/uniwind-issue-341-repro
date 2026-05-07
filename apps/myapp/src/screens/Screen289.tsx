import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy289 } from '../generated/copy/copy289';
import { layout289 } from '../generated/layouts/layout289';
import { palette289 } from '../generated/palettes/palette289';

const RuntimeView289 = withUniwind(View);

export function Screen289() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView289 styleClassName={layout289.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy289.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy289.detail} / {palette289.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
