import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy478 } from '../generated/copy/copy478';
import { layout478 } from '../generated/layouts/layout478';
import { palette478 } from '../generated/palettes/palette478';

const RuntimeView478 = withUniwind(View);

export function Screen478() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView478 styleClassName={layout478.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy478.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy478.detail} / {palette478.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
