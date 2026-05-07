import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy310 } from '../generated/copy/copy310';
import { layout310 } from '../generated/layouts/layout310';
import { palette310 } from '../generated/palettes/palette310';

const RuntimeView310 = withUniwind(View);

export function Screen310() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView310 styleClassName={layout310.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy310.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy310.detail} / {palette310.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
